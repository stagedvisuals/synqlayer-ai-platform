#!/usr/bin/env python3
"""
Bio-Inspired Computing Service
Dutch Tax Optimization Engine
"""

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Dict, Optional
import numpy as np
from datetime import datetime
import logging

app = FastAPI(
    title="Bio-Inspired Computing Service",
    description="Dutch Tax Optimization using Genetic Algorithms",
    version="1.0.0"
)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Dutch tax constants
DUTCH_TAX_BRACKETS = {
    2026: [
        {"min": 0, "max": 37947, "rate": 0.3693},
        {"min": 37947, "max": 73031, "rate": 0.4950},
        {"min": 73031, "max": float('inf'), "rate": 0.4950}
    ]
}

DUTCH_BUSINESS_DEDUCTIONS = {
    "startup_costs": 0.15,  # 15% of startup costs deductible
    "research_development": 0.32,  # 32% R&D deduction
    "energy_investment": 0.45,  # 45% energy investment deduction
    "innovation_box": 0.09,  # 9% innovation box rate
    "small_business_profit": 0.14,  # 14% small business profit exemption
    "investment_deduction": 0.28  # 28% investment deduction
}

class DutchBusiness(BaseModel):
    """Dutch business model for tax optimization"""
    kvk_number: str
    business_type: str  # "ZZP", "BV", "NV", "VOF"
    revenue: float
    costs: float
    employees: int
    location: str  # Dutch municipality
    industry: str
    year: int = 2026
    
class TaxOptimizationRequest(BaseModel):
    """Request for tax optimization"""
    business: DutchBusiness
    optimization_goal: str = "minimize_tax"  # "minimize_tax", "maximize_cash_flow", "balance"
    generations: int = 100
    population_size: int = 50
    
class TaxStrategy(BaseModel):
    """Optimized tax strategy"""
    strategy_id: str
    business: DutchBusiness
    total_tax: float
    tax_savings: float
    savings_percentage: float
    recommended_actions: List[str]
    implementation_steps: List[str]
    compliance_status: str
    estimated_roi: float
    
class GeneticAlgorithm:
    """Genetic Algorithm for Dutch tax optimization"""
    
    def __init__(self, business: DutchBusiness):
        self.business = business
        self.population = []
        self.generation = 0
        self.best_solution = None
        self.best_fitness = float('inf')
        
    def initialize_population(self, size: int = 50):
        """Initialize random population of tax strategies"""
        self.population = []
        for _ in range(size):
            strategy = self._create_random_strategy()
            self.population.append(strategy)
        
    def _create_random_strategy(self) -> Dict:
        """Create a random tax strategy"""
        strategy = {
            "rd_deduction": np.random.uniform(0, DUTCH_BUSINESS_DEDUCTIONS["research_development"]),
            "energy_investment": np.random.uniform(0, DUTCH_BUSINESS_DEDUCTIONS["energy_investment"]),
            "innovation_box": np.random.choice([True, False]),
            "small_business": self.business.revenue < 200000,  # Eligible if revenue < €200k
            "investment_deduction": np.random.uniform(0, DUTCH_BUSINESS_DEDUCTIONS["investment_deduction"]),
            "startup_costs": np.random.uniform(0, DUTCH_BUSINESS_DEDUCTIONS["startup_costs"]),
            "salary_optimization": np.random.uniform(0.7, 1.3),  # Salary optimization factor
            "dividend_timing": np.random.choice(["Q1", "Q2", "Q3", "Q4"]),
            "pension_contribution": np.random.uniform(0.05, 0.15),  # 5-15% of salary
        }
        return strategy
    
    def calculate_tax(self, strategy: Dict) -> float:
        """Calculate tax for a given strategy"""
        profit = self.business.revenue - self.business.costs
        
        # Apply deductions
        deductions = 0
        
        # Research & Development deduction
        if strategy["rd_deduction"] > 0:
            rd_deduction = profit * strategy["rd_deduction"]
            deductions += rd_deduction
        
        # Energy investment deduction
        if strategy["energy_investment"] > 0:
            energy_deduction = profit * strategy["energy_investment"]
            deductions += energy_deduction
        
        # Innovation box (9% rate instead of normal rate)
        if strategy["innovation_box"]:
            # Qualifying profit gets 9% rate
            innovation_profit = profit * 0.3  # Assume 30% qualifies
            normal_profit = profit - innovation_profit
            tax_innovation = innovation_profit * 0.09
            tax_normal = self._calculate_normal_tax(normal_profit - deductions)
            return tax_innovation + tax_normal
        
        # Small business profit exemption
        if strategy["small_business"] and profit < 200000:
            exemption = profit * DUTCH_BUSINESS_DEDUCTIONS["small_business_profit"]
            profit -= exemption
        
        # Investment deduction
        if strategy["investment_deduction"] > 0:
            investment_deduction = profit * strategy["investment_deduction"]
            deductions += investment_deduction
        
        # Startup costs deduction
        if strategy["startup_costs"] > 0:
            startup_deduction = profit * strategy["startup_costs"]
            deductions += startup_deduction
        
        # Calculate taxable profit
        taxable_profit = max(0, profit - deductions)
        
        # Calculate tax
        tax = self._calculate_normal_tax(taxable_profit)
        
        # Salary optimization (director's salary)
        if self.business.business_type in ["BV", "NV"]:
            optimal_salary = self.business.revenue * 0.3  # 30% of revenue as salary
            current_salary = self.business.costs * strategy["salary_optimization"]
            salary_difference = optimal_salary - current_salary
            if salary_difference > 0:
                # Lower salary means higher profit, higher tax
                tax += salary_difference * 0.4950  # Highest tax bracket
        
        return tax
    
    def _calculate_normal_tax(self, profit: float) -> float:
        """Calculate normal Dutch income tax"""
        tax = 0
        brackets = DUTCH_TAX_BRACKETS[2026]
        
        for bracket in brackets:
            if profit <= 0:
                break
                
            bracket_range = bracket["max"] - bracket["min"]
            taxable_in_bracket = min(profit, bracket_range)
            tax += taxable_in_bracket * bracket["rate"]
            profit -= taxable_in_bracket
        
        return tax
    
    def calculate_fitness(self, strategy: Dict) -> float:
        """Calculate fitness (lower is better - less tax)"""
        tax = self.calculate_tax(strategy)
        
        # Penalize complex strategies
        complexity_penalty = 0
        if strategy["innovation_box"]:
            complexity_penalty += 5000  # Innovation box requires documentation
        
        # Penalize risky strategies
        risk_penalty = 0
        if strategy["rd_deduction"] > 0.25:
            risk_penalty += 3000  # High R&D deduction might be audited
        
        return tax + complexity_penalty + risk_penalty
    
    def evolve(self, generations: int = 100):
        """Evolve population for given generations"""
        for gen in range(generations):
            self.generation = gen
            
            # Calculate fitness for all individuals
            fitness_scores = []
            for strategy in self.population:
                fitness = self.calculate_fitness(strategy)
                fitness_scores.append(fitness)
            
            # Find best solution
            best_idx = np.argmin(fitness_scores)
            if fitness_scores[best_idx] < self.best_fitness:
                self.best_fitness = fitness_scores[best_idx]
                self.best_solution = self.population[best_idx]
            
            # Selection (tournament selection)
            new_population = []
            for _ in range(len(self.population)):
                # Tournament of size 3
                tournament = np.random.choice(len(self.population), 3, replace=False)
                tournament_fitness = [fitness_scores[i] for i in tournament]
                winner_idx = tournament[np.argmin(tournament_fitness)]
                new_population.append(self.population[winner_idx].copy())
            
            # Crossover (single point)
            for i in range(0, len(new_population), 2):
                if i + 1 < len(new_population):
                    parent1 = new_population[i]
                    parent2 = new_population[i + 1]
                    
                    # Single point crossover
                    crossover_point = np.random.randint(1, len(parent1) - 1)
                    keys = list(parent1.keys())
                    
                    child1 = {}
                    child2 = {}
                    
                    for j, key in enumerate(keys):
                        if j < crossover_point:
                            child1[key] = parent1[key]
                            child2[key] = parent2[key]
                        else:
                            child1[key] = parent2[key]
                            child2[key] = parent1[key]
                    
                    new_population[i] = child1
                    new_population[i + 1] = child2
            
            # Mutation
            for i in range(len(new_population)):
                if np.random.random() < 0.1:  # 10% mutation rate
                    key = np.random.choice(list(new_population[i].keys()))
                    
                    if key == "innovation_box":
                        new_population[i][key] = not new_population[i][key]
                    elif key == "dividend_timing":
                        new_population[i][key] = np.random.choice(["Q1", "Q2", "Q3", "Q4"])
                    elif key == "small_business":
                        # Small business eligibility depends on revenue
                        new_population[i][key] = self.business.revenue < 200000
                    else:
                        # Add small random change
                        if isinstance(new_population[i][key], float):
                            mutation = np.random.normal(0, 0.1)
                            new_population[i][key] = max(0, min(
                                new_population[i][key] + mutation,
                                DUTCH_BUSINESS_DEDUCTIONS.get(key, 1.0)
                            ))
            
            self.population = new_population
            
            # Log progress
            if gen % 10 == 0:
                avg_fitness = np.mean(fitness_scores)
                logger.info(f"Generation {gen}: Best fitness = {self.best_fitness:.2f}, Avg fitness = {avg_fitness:.2f}")
    
    def get_optimized_strategy(self) -> TaxStrategy:
        """Get the optimized tax strategy"""
        if not self.best_solution:
            raise ValueError("No optimized strategy found. Run evolve() first.")
        
        # Calculate baseline tax (no optimization)
        baseline_tax = self._calculate_normal_tax(self.business.revenue - self.business.costs)
        
        # Calculate optimized tax
        optimized_tax = self.calculate_tax(self.best_solution)
        
        # Calculate savings
        tax_savings = baseline_tax - optimized_tax
        savings_percentage = (tax_savings / baseline_tax * 100) if baseline_tax > 0 else 0
        
        # Generate recommendations
        recommendations = self._generate_recommendations(self.best_solution)
        
        # Generate implementation steps
        implementation = self._generate_implementation_steps(self.best_solution)
        
        # Check compliance
        compliance = self._check_compliance(self.best_solution)
        
        # Estimate ROI (savings vs implementation cost)
        implementation_cost = self._estimate_implementation_cost(self.best_solution)
        estimated_roi = (tax_savings / implementation_cost * 100) if implementation_cost > 0 else float('inf')
        
        return TaxStrategy(
            strategy_id=f"tax_opt_{datetime.now().strftime('%Y%m%d_%H%M%S')}",
            business=self.business,
            total_tax=optimized_tax,
            tax_savings=tax_savings,
            savings_percentage=savings_percentage,
            recommended_actions=recommendations,
            implementation_steps=implementation,
            compliance_status=compliance,
            estimated_roi=estimated_roi
        )
    
    def _generate_recommendations(self, strategy: Dict) -> List[str]:
        """Generate business recommendations from strategy"""
        recommendations = []
        
        if strategy["rd_deduction"] > 0.1:
            recommendations.append(f"Claim research & development deduction: {strategy['rd_deduction']*100:.1f}% of profit")
        
        if strategy["energy_investment"] > 0.1:
            recommendations.append(f"Utilize energy investment deduction: {strategy['energy_investment']*100:.1f}% of investment")
        
        if strategy["innovation_box"]:
            recommendations.append("Apply for innovation box regime (9% tax rate on qualifying profits)")
        
        if strategy["small_business"] and self.business.revenue < 200000:
            recommendations.append(f"Use small business profit exemption: {DUTCH_BUSINESS_DEDUCTIONS['small_business_profit']*100:.1f}% exemption")
        
        if strategy["investment_deduction"] > 0.1:
            recommendations.append(f"Claim investment deduction: {strategy['investment_deduction']*100:.1f}% of investments")
        
        if strategy["startup_costs"] > 0.1:
            recommendations.append(f"Deduct startup costs: {strategy['startup_costs']*100:.1f}% of costs")
        
        # Salary optimization
        if self.business.business_type in ["BV", "NV"]:
            optimal_salary = self.business.revenue * 0.3
            current_salary = self.business.costs * strategy["salary_optimization"]
            if abs(optimal_salary - current_salary) > 10000:
                recommendations.append(f"Optimize director salary: Target €{optimal_salary:,.0f} (currently €{current_salary:,.0f})")
        
        # Dividend timing
        if strategy["dividend_timing"] != "Q4":
            recommendations.append(f"Time dividend payments for {strategy['dividend_timing']} to optimize cash flow")
        
        return recommendations
    
    def _generate_implementation_steps(self, strategy: Dict) -> List[str]:
        """Generate implementation steps"""
        steps = []
        
        steps.append("1. Review current financial statements")
        steps.append("2. Document qualifying activities for deductions")
        steps.append("3. Prepare supporting documentation")
        steps.append("4. Consult with tax advisor for complex strategies")
        steps.append("5. Implement changes in accounting system")
        steps.append("6. File updated tax returns")
        steps.append("7. Monitor results and adjust as needed")
        
        return steps
    
    def _check_compliance(self, strategy: Dict) -> str:
        """Check compliance status"""
        issues = []
        
        # Check if R&D deduction requires documentation
        if strategy["rd_deduction"] > 0.2:
            issues.append("High R&D deduction requires detailed documentation")
        
        # Check innovation box eligibility
        if strategy["innovation_box"]:
            # Innovation box requires R&D activities
            if strategy["rd_deduction"] < 0.1:
                issues.append("Innovation box requires significant R&D activities")
        
        # Check small business eligibility
        if strategy["small_business"] and self.business.revenue >= 200000:
            issues.append("Business may not qualify for small business exemption")
        
        if issues:
            return f"Conditional compliance: {', '.join(issues)}"
        else:
            return "Fully compliant with Dutch tax regulations"
    
    def _estimate_implementation_cost(self, strategy: Dict) -> float:
        """Estimate implementation cost"""
        cost = 0
        
        # Professional fees
        if strategy["innovation_box"]:
            cost += 5000  # Legal/consulting fees for innovation box
        
        if strategy["rd_deduction"] > 0.1:
            cost += 2000  # Documentation preparation
        
        if len(self._generate_recommendations(strategy)) > 3:
            cost += 3000  # Implementation support
        
        # System changes
        cost += 1000  # Accounting system updates
        
        return max(1000, cost)  # Minimum €1000 implementation cost

@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "service": "Bio-Inspired Computing Service",
        "version": "1.0.0",
        "description": "Dutch Tax Optimization using Genetic Algorithms",
        "endpoints": {
            "/health": "Health check",
            "/optimize/tax": "Tax optimization endpoint",
            "/docs": "API documentation"
        }
    }

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "service": "bio-inspired-computing"
    }

@app.post("/optimize/tax", response_model=TaxStrategy)
async def optimize_tax(request: TaxOptimizationRequest):
    """
    Optimize Dutch tax using genetic algorithms
    
    Args:
        request: Tax optimization request with business details
    
    Returns:
        Optimized tax strategy with recommendations
    """
    try:
        logger.info(f"Starting tax optimization for business: {request.business.kvk