# 🏠 House Price Prediction Web Application

A Machine Learning-powered web application that predicts house prices based on various housing features such as location, number of rooms, population, median income, and other property-related attributes.

## 📌 Project Overview

This project implements an end-to-end Machine Learning pipeline for house price prediction. The model is trained using housing market data and deployed through a Flask web application, allowing users to input housing attributes and receive real-time price predictions through a user-friendly interface.

## 🚀 Features

* Predict house prices using Machine Learning
* Interactive web interface for user inputs
* Real-time prediction results
* Data preprocessing and feature engineering
* Model serialization using Pickle
* Flask-based REST API integration
* Clean and responsive frontend

## 🛠️ Tech Stack

### Machine Learning

* Python
* Pandas
* NumPy
* Scikit-Learn

### Backend

* Flask

### Frontend

* HTML
* CSS
* JavaScript

### Deployment

* Pickle (Model Persistence)

## 📊 Input Features

The model uses the following features:

* Longitude
* Latitude
* Housing Median Age
* Total Rooms
* Total Bedrooms
* Population
* Households
* Median Income

## ⚙️ Project Structure

```text
House-Price-Prediction/
│
├── app.py
├── house_price_model.pkl
├── model_columns.pkl
├── housing.csv
│
├── templates/
│   └── index.html
│
├── static/
│   ├── style.css
│   └── script.js
│
└── README.md
```

## 🔄 Workflow

1. Data Collection
2. Data Cleaning & Preprocessing
3. Feature Engineering
4. Model Training using Linear Regression
5. Model Evaluation
6. Model Serialization using Pickle
7. Flask API Development
8. Frontend Integration
9. Real-Time Prediction

## ▶️ How to Run

### Clone Repository

```bash
git clone https://github.com/your-username/House-Price-Prediction.git
cd House-Price-Prediction
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run Application

```bash
python app.py
```

### Open Browser

```text
http://127.0.0.1:5000
```

## 📈 Future Improvements

* Deploy application on Render or AWS
* Add advanced regression models
* Implement feature importance visualization
* Add interactive charts and dashboards
* Improve UI/UX with Bootstrap or React

## 👨‍💻 Author

**Shivam Singh Dhakrey**

B.Tech, Computer Science & Engineering
Maulana Azad National Institute of Technology (MANIT), Bhopal

GitHub: https://github.com/shivamdhak12
LinkedIn: https://www.linkedin.com/in/shivam-singh-dhakrey-2b6451323/

---

⭐ If you found this project useful, consider giving it a star!
