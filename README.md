# 🌩️ CloudLens – Kubernetes Monitoring with Prometheus & Grafana

CloudLens is a **beginner-friendly but production-style DevOps monitoring project** that demonstrates how to monitor applications and Kubernetes infrastructure using **Prometheus** and **Grafana**.

This project focuses on **real-time observability**, **clean architecture**, and **cost-aware cloud usage**.

---

## 🚀 Project Overview

CloudLens monitors a backend application running on Kubernetes and visualizes:

* Application traffic (HTTP requests)
* Pod health and restarts
* CPU and memory usage
* Kubernetes cluster health

All **live metrics** are visualized in a **single Grafana dashboard**, which acts as the main monitoring UI.

> ⚠️ Note: Grafana is the official monitoring frontend. A custom UI is not used for real-time metrics.

---

## 🏗️ Architecture

```
User
  ↓
Node.js Backend (Kubernetes)
  ↓
/metrics endpoint
  ↓
Prometheus (kube-prometheus-stack)
  ↓
Grafana Dashboard (Single Source of Truth)
```

---

## 🧰 Tech Stack

* **Cloud**: AWS EC2
* **Containerization**: Docker
* **Orchestration**: Kubernetes
* **Monitoring**: Prometheus
* **Visualization**: Grafana
* **Ingress**: NGINX Ingress Controller
* **Language**: Node.js

---

## 📁 Repository Structure

```
cloudlens-backend/
├── Dockerfile
├── server.js
├── metrics.js
├── package.json
├── cloudlens-servicemonitor.yaml
├── hpa-rbac.yaml
├── cloudlens-master-dashboard.json
└── README.md
```

---

## 🔧 Key Features

* Custom Prometheus metrics exposed from backend (`/metrics`)
* Service discovery using **ServiceMonitor**
* Unified Grafana dashboard for:

  * CPU & Memory usage
  * HTTP request rate
  * Pod readiness & restarts
  * Service health
* Domain exposure using Ingress (DuckDNS)
* Clean teardown to avoid cloud billing

---

## 📊 Example PromQL Queries

### HTTP Request Rate

```promql
sum(rate(cloudlens_http_requests_total[1m]))
```

### Pod Readiness

```promql
kube_pod_status_ready{namespace="cloudlens", condition="true"}
```

### CPU Usage

```promql
sum(rate(container_cpu_usage_seconds_total{namespace="cloudlens"}[5m]))
```

---

## 📈 Dashboard

* A single **Master Grafana Dashboard** was created
* Dashboard exported as JSON:

```
cloudlens-master-dashboard.json
```

This allows easy reuse and sharing of the dashboard.

---

## 🧹 Cost Optimization

To ensure **zero AWS billing**, all resources were cleaned up after testing:

* Application namespaces deleted
* Monitoring stack removed
* Ingress controller removed
* EC2 instance terminated

> Clean teardown is an important real-world DevOps skill.

---

## 🎤 Interview-Ready Summary

> Built a Kubernetes-based monitoring system using Prometheus and Grafana to visualize real-time application and infrastructure metrics. Implemented service discovery, ingress-based exposure, and ensured cost-efficient cloud usage through proper teardown.

---

## 📌 Key Learnings

* Kubernetes monitoring best practices
* Difference between application metrics and infrastructure metrics
* Prometheus scraping using ServiceMonitor
* Grafana dashboard design
* Importance of cost control in cloud environments

---

## ✅ Project Status

✔ Completed successfully
✔ No running cloud resources
✔ Zero ongoing AWS billing

---

## 🙌 Final Note

CloudLens was built as a **learning-focused DevOps project**, emphasizing **clarity**, **real-world practices**, and **cost awareness**.

Feel free to fork, study, or extend this project.

**Happy Monitoring! 🚀**
