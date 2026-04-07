"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Euro, Shield, Zap, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const BusinessValue = () => {
  const [revenue, setRevenue] = useState(1000000); // €1M
  const [employees, setEmployees] = useState(10);
  const [industry, setIndustry] = useState("technology");

  const industries = [
    { id: "technology", label: "Technology", multiplier: 1.2 },
    { id: "manufacturing", label: "Manufacturing", multiplier: 1.1 },
    { id: "logistics", label: "Logistics", multiplier: 1.3 },
    { id: "retail", label: "Retail", multiplier: 1.0 },
    { id: "services", label: "Services", multiplier: 1.15 },
  ];

  // Calculate business value
  const calculateValue = () => {
    const industryMultiplier = industries.find(i => i.id === industry)?.multiplier || 1;
    
    // Base calculations
    const taxSavings = revenue * 0.38 * industryMultiplier; // 38% average savings
    const efficiencyGains = revenue * 0.25 * (employees / 10); // 25% efficiency
    const complianceSavings = employees * 5000 * industryMultiplier; // €5k per employee
    const predictionValue = revenue * 0.15 * industryMultiplier; // 15% better predictions
    
    const totalAnnualValue = taxSavings + efficiencyGains + complianceSavings + predictionValue;
    const monthlyValue = totalAnnualValue / 12;
    
    return {
      taxSavings: Math.round(taxSavings),
      efficiencyGains: Math.round(efficiencyGains),
      complianceSavings: Math.round(complianceSavings),
      predictionValue: Math.round(predictionValue),
      totalAnnualValue: Math.round(totalAnnualValue),
      monthlyValue: Math.round(monthlyValue),
      roi: Math.round((totalAnnualValue / (revenue * 0.1)) * 100), // Assume 10% investment
    };
  };

  const values = calculateValue();

  const metrics = [
    {
      icon: Euro,
      label: "Tax Savings",
      value: `€${values.taxSavings.toLocaleString()}`,
      description: "34-62% Dutch tax optimization",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: Zap,
      label: "Efficiency Gains",
      value: `€${values.efficiencyGains.toLocaleString()}`,
      description: "20-50% operational efficiency",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: Shield,
      label: "Compliance Savings",
      value: `€${values.complianceSavings.toLocaleString()}`,
      description: "AVG/GDPR automation",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      icon: TrendingUp,
      label: "Prediction Value",
      value: `€${values.predictionValue.toLocaleString()}`,
      description: "85-95% forecasting accuracy",
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-dutch-orange/20 to-dutch-blue/20">
          <Calculator className="h-5 w-5 text-dutch-orange" />
          <span className="font-medium">Business Value Calculator</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">
          Calculate Your ROI
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          See how much value 15 AI skills can bring to your Dutch business
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calculator Controls */}
        <Card>
          <CardHeader>
            <CardTitle>Configure Your Business</CardTitle>
            <CardDescription>
              Adjust sliders to match your business profile
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Revenue Slider */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="revenue" className="text-lg font-medium">
                  Annual Revenue
                </Label>
                <div className="text-2xl font-bold text-dutch-blue">
                  €{revenue.toLocaleString()}
                </div>
              </div>
              <Slider
                id="revenue"
                min={100000}
                max={10000000}
                step={100000}
                value={[revenue]}
                onValueChange={([value]) => setRevenue(value)}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>€100K</span>
                <span>€10M</span>
              </div>
            </div>

            {/* Employees Slider */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="employees" className="text-lg font-medium">
                  Number of Employees
                </Label>
                <div className="text-2xl font-bold text-dutch-blue">
                  {employees}
                </div>
              </div>
              <Slider
                id="employees"
                min={1}
                max={100}
                step={1}
                value={[employees]}
                onValueChange={([value]) => setEmployees(value)}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>1</span>
                <span>100</span>
              </div>
            </div>

            {/* Industry Selector */}
            <div className="space-y-4">
              <Label className="text-lg font-medium">Industry</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {industries.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setIndustry(ind.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      industry === ind.id
                        ? "border-dutch-orange bg-dutch-orange/10"
                        : "border-gray-200 dark:border-gray-800 hover:border-dutch-orange/50"
                    }`}
                  >
                    <div className="font-medium">{ind.label}</div>
                    <div className="text-sm text-gray-500">
                      {ind.multiplier}x multiplier
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="space-y-6">
          {/* Total Value */}
          <Card className="border-2 border-dutch-orange/50">
            <CardHeader>
              <CardTitle className="text-2xl">Annual Business Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6">
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                  €{values.totalAnnualValue.toLocaleString()}
                </div>
                <div className="text-xl text-gray-600 dark:text-gray-400">
                  per year with SynqLayer AI Platform
                </div>
                <div className="mt-4 text-lg">
                  <Badge className="text-lg px-4 py-1 bg-green-500/20 text-green-600">
                    {values.roi}% ROI
                  </Badge>
                  <div className="text-sm text-gray-500 mt-2">
                    Return on investment based on 10% platform cost
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Monthly Value */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Monthly Value</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl font-bold text-dutch-blue">
                  €{values.monthlyValue.toLocaleString()}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  average monthly value
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              <Card className={`${metric.bgColor} border-0`}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                      <Icon className={`h-6 w-6 ${metric.color}`} />
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${metric.color}`}>
                        {metric.value}
                      </div>
                      <div className="font-medium">{metric.label}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {metric.description}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Dutch Business Impact */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>Dutch Market Impact</span>
          </CardTitle>
          <CardDescription>
            Based on 50,000+ Dutch MKB businesses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-dutch-orange/10 to-dutch-blue/10">
              <div className="text-3xl font-bold gradient-text">€500M+</div>
              <div className="text-lg font-medium">Market Opportunity</div>
              <div className="text-gray-600 dark:text-gray-400">
                Annual value for Dutch MKB
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10">
              <div className="text-3xl font-bold text-green-600">34-62%</div>
              <div className="text-lg font-medium">Tax Savings</div>
              <div className="text-gray-600 dark:text-gray-400">
                Average for Dutch businesses
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
              <div className="text-3xl font-bold text-blue-600">20-50%</div>
              <div className="text-lg font-medium">Efficiency Gains</div>
              <div className="text-gray-600 dark:text-gray-400">
                Operational efficiency improvement
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessValue;