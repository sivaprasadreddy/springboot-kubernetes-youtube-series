$ErrorActionPreference = "Stop"

Write-Host "Creating Kind cluster..."

# First delete any existing cluster with the same name
kind delete cluster --name bookmarker-cluster
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

# Create the cluster with Ingress and NodePort host mappings
kind create cluster --name bookmarker-cluster --config "$PSScriptRoot/kind-config.yml"
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

# Load our Docker images into the cluster
Write-Host "Loading Docker images into the cluster..."
kind load docker-image sivaprasadreddy/bookmarker-api:0.0.1-SNAPSHOT --name bookmarker-cluster
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
kind load docker-image sivaprasadreddy/bookmarker-ui:0.0.1-SNAPSHOT --name bookmarker-cluster
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

# Deploy NGINX Ingress Controller
Write-Host "Installing NGINX Ingress Controller..."
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Waiting for NGINX Ingress Controller to be ready..."
Start-Sleep -Seconds 20
kubectl wait --namespace ingress-nginx --for=condition=ready pod --selector=app.kubernetes.io/component=controller --timeout=180s
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Kind cluster is ready for deployment"
