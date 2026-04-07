#!/bin/bash
# Setup GitHub repository for SynqLayer AI Platform

echo "🚀 SynqLayer AI Platform - GitHub Setup"
echo "========================================"

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI not installed. Please install from:"
    echo "   https://cli.github.com/"
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo "🔐 Please authenticate with GitHub:"
    gh auth login
fi

# Create new repository
echo "📦 Creating new GitHub repository..."
read -p "Enter repository name (default: synqlayer-ai-platform): " repo_name
repo_name=${repo_name:-synqlayer-ai-platform}

read -p "Enter repository description: " repo_description
repo_description=${repo_description:-"Dutch Business AI Automation Platform"}

read -p "Make repository private? (y/n, default: n): " is_private
if [[ "$is_private" == "y" || "$is_private" == "Y" ]]; then
    private_flag="--private"
else
    private_flag="--public"
fi

# Create repository
gh repo create "$repo_name" \
    --description "$repo_description" \
    $private_flag \
    --source=. \
    --remote=origin \
    --push

if [ $? -eq 0 ]; then
    echo "✅ Repository created successfully!"
    
    # Set up branch protection
    echo "🛡️ Setting up branch protection..."
    gh api -X PUT "repos/$(gh repo view --json nameWithOwner -q '.nameWithOwner')/branches/master/protection" \
        --input - << EOF
{
    "required_status_checks": {
        "strict": true,
        "contexts": ["ci/cd"]
    },
    "enforce_admins": true,
    "required_pull_request_reviews": {
        "required_approving_review_count": 2,
        "dismiss_stale_reviews": true,
        "require_code_owner_reviews": true
    },
    "restrictions": null,
    "allow_force_pushes": false,
    "allow_deletions": false
}
EOF
    
    # Set up labels
    echo "🏷️ Setting up issue labels..."
    gh label create "bug" --color "d73a4a" --description "Something isn't working"
    gh label create "enhancement" --color "a2eeef" --description "New feature or request"
    gh label create "dutch-business" --color "0052cc" --description "Dutch business requirement"
    gh label create "avg-gdpr" --color "5319e7" --description "Privacy/compliance related"
    gh label create "documentation" --color "0075ca" --description "Improvements or additions to documentation"
    gh label create "good first issue" --color "7057ff" --description "Good for newcomers"
    gh label create "help wanted" --color "008672" --description "Extra attention is needed"
    gh label create "priority: high" --color "b60205" --description "High priority issue"
    gh label create "priority: medium" --color "d93f0b" --description "Medium priority issue"
    gh label create "priority: low" --color "0e8a16" --description "Low priority issue"
    
    # Create initial issues
    echo "📋 Creating initial issues..."
    
    # Issue 1: Dutch tax optimization
    gh issue create \
        --title "Implement Dutch tax optimization algorithms" \
        --body "## Dutch Business Need
Dutch MKB businesses are overpaying taxes due to complex regulations.

## Technical Requirements
- Implement genetic algorithms for tax optimization
- Integrate with Dutch tax law database
- Add KVK/BTW validation
- Ensure AVG/GDPR compliance

## Business Value
- 34-62% tax savings for Dutch businesses
- €500K+ annual savings potential
- 100+ Dutch businesses ready to adopt

## Acceptance Criteria
- [ ] Genetic algorithm implementation
- [ ] Dutch tax law integration
- [ ] KVK/BTW validation
- [ ] AVG/GDPR compliance
- [ ] Performance testing
- [ ] Documentation" \
        --label "dutch-business,priority:high,avg-gdpr"
    
    # Issue 2: Privacy-preserving AI
    gh issue create \
        --title "Implement federated learning for Dutch businesses" \
        --body "## Dutch Business Need
Businesses want to collaborate on AI without sharing sensitive data.

## Technical Requirements
- Implement federated learning algorithms
- Add differential privacy
- Ensure secure aggregation
- AVG/GDPR compliance by design

## Business Value
- Privacy-preserving AI collaboration
- 30-40% better predictions
- €1M+ improved decision making
- 30+ businesses ready to collaborate

## Acceptance Criteria
- [ ] Federated learning implementation
- [ ] Differential privacy
- [ ] Secure aggregation
- [ ] AVG/GDPR compliance
- [ ] Performance testing
- [ ] Documentation" \
        --label "dutch-business,priority:high,avg-gdpr"
    
    # Issue 3: Business forecasting
    gh issue create \
        --title "Build predictive analytics for Dutch business" \
        --body "## Dutch Business Need
Dutch businesses need accurate forecasting for better decisions.

## Technical Requirements
- Time series forecasting models
- Regression and classification algorithms
- Dutch business data integration
- Real-time predictions

## Business Value
- 85-95% forecasting accuracy
- 20% better business planning
- €2M+ annual value
- 50+ businesses ready to use

## Acceptance Criteria
- [ ] Time series models
- [ ] Regression algorithms
- [ ] Classification models
- [ ] Dutch data integration
- [ ] Performance testing
- [ ] Documentation" \
        --label "dutch-business,priority:high"
    
    # Create project board
    echo "📊 Creating project board..."
    gh project create \
        --title "SynqLayer AI Platform Roadmap" \
        --description "Development roadmap for Dutch Business AI Platform" \
        --visibility public
    
    echo ""
    echo "🎉 GitHub repository setup complete!"
    echo ""
    echo "📊 Repository: https://github.com/$(gh repo view --json nameWithOwner -q '.nameWithOwner')"
    echo "📋 Issues: https://github.com/$(gh repo view --json nameWithOwner -q '.nameWithOwner')/issues"
    echo "📈 Project: https://github.com/$(gh repo view --json nameWithOwner -q '.nameWithOwner')/projects"
    echo ""
    echo "🚀 Next steps:"
    echo "1. Review the created issues"
    echo "2. Set up CI/CD pipeline"
    echo "3. Add team members"
    echo "4. Start development!"
    
else
    echo "❌ Failed to create repository. Please check your GitHub credentials."
    exit 1
fi