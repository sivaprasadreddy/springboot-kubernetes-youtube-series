#!/bin/sh

echo "Initializing Kubernetes cluster..."

kind create cluster --config kind-config.yml

echo "\n-----------------------------------------------------\n"

echo "Installing NGINX Ingress..."

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml

echo "\n-----------------------------------------------------\n"

echo "Waiting for NGINX Ingress to be ready..."

sleep 10

kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=180s

echo "\n"

echo "Happy Sailing!"
