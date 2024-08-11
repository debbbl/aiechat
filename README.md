# AIESEC Support and Feedback Analysis System

This project was developed in collaboration with the AIESEC Marketing Team and Outgoing Global Volunteer (oGV) Team at the University of Malaya as part of my WID3002 Natural Language Processing Project. The system is a web-based application that leverages NLP techniques to support AIESEC's operations by providing automated assistance and insights.

## Project Overview

The project consists of two main components:

1. **AIECHAT - Chatbot for Support and Recommendations**
2. **Sentiment Analysis Tool for Feedback Analysis**

### 1. AIECHAT - Chatbot for Support and Recommendations

AIECHAT is an intelligent chatbot designed to support AIESEC's members and applicants by addressing inquiries and providing personalized recommendations. It is built using the Rasa framework and deployed using a Flask backend.

#### Key Features:
- **Dynamic Conversations:** The chatbot supports dynamic, context-aware conversations, allowing users to engage in natural dialogue.
- **Personalized Recommendations:** Users can specify their preferences, such as country, interests, and timeline, to receive tailored volunteering program recommendations.

### 2. Sentiment Analysis Tool for Feedback Analysis

The sentiment analysis tool is designed to analyze feedback data collected from AIESEC members and participants. The tool processes uploaded form response data in CSV format, extracts relevant information, and applies sentiment analysis to categorize feedback into positive, neutral, or negative sentiments.

#### Key Features:
- **Automated Feedback Processing:** Users can upload form responses in CSV format, which are then processed using NLTK to extract textual data and relevant entities.
- **Sentiment Classification:** The tool applies the Naive Bayes algorithm to classify feedback into three categories: positive, neutral, and negative.
- **Actionable Insights:** By analyzing the feedback, AIESEC can gain valuable insights into members' and participants' perceptions, helping to improve programs and services.

## Addressing Key Issues

This project aims to tackle several challenges faced by AIESEC:

- **Support and Assistance:** Managing inquiries from members and applicants can be overwhelming. AIECHAT helps streamline this process by providing instant responses and personalized program recommendations.
- **Information Overload:** AIESEC offers a wide range of programs, which can be overwhelming for users. The chatbot helps simplify decision-making by tailoring recommendations to users' preferences.
- **Limited Feedback Insights:** Gathering actionable insights from feedback data is crucial for continuous improvement. The sentiment analysis tool automates this process, enabling AIESEC to quickly and effectively understand participants' opinions.

## Getting Started

To set up and run this project on your local machine, follow these steps:

1. **Clone this repository**:
   ```bash
   git clone [repository-url]
2. **Create and activate a virtual environment**:
  ```bash
  python -m venv env
  env\Scripts\activate
3. **Install the required dependencies**:
    ```bash
  pip install -r requirements.txt
4. **Run the following commands in 3 separate terminals**:
```bash
- Terminal 1: Start the Rasa server:
```bash
rasa run --cors "*"
```bash
- Terminal 2:Start the Rasa action server:
```bash
rasa run actions
```bash
- Terminal 3: Start the Flask application:
python app.py
