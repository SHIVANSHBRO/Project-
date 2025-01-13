#!/bin/bash

# Build the application
echo "Building the application..."
npm run build

# Initialize Elastic Beanstalk if not already done
if [ ! -d ".elasticbeanstalk" ]; then
    echo "Initializing Elastic Beanstalk..."
    eb init -p node.js oriental-furnishing-works
fi

# Deploy to Elastic Beanstalk
echo "Deploying to Elastic Beanstalk..."
eb deploy

echo "Deployment complete!"