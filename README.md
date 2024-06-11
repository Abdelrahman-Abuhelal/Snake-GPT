
# Introduction
SNAKE, short for Strategic Neural Analysis and Knowledge Enhancement, is an innovation project that I undertook during my internship at Bosch.
This project aimed to create a chrome extension tool that generate user stories for project requirements based on the context presented on the page opened.


# Technologies and tools:

1.	Python Libraries and Flask Framework: We honed our skills in Python and leveraged various libraries and the Flask framework for web development.
2.	JavaScript, CSS, and HTML: These essential web technologies were utilized in the development of the Chrome extension, ensuring a user-friendly interface.
3.	Node.js: We employed Node.js to build the backend infrastructure, enabling seamless communication between the front-end and back-end components.
4.	MongoDB: Data storage was managed using MongoDB, a NoSQL database that facilitated efficient data handling.
5.	ChromaDB: We utilized ChromaDB for storing Large Language Model (LLM) embeddings, an integral part of our project.
6.	PyTorch: Familiarity with PyTorch was essential for the fine-tuning process and other techniques, allowing us to optimize the performance of our models.
7.	Google Colab and Runpod: To meet our computing resource needs, especially for GPU-intensive tasks and testing, we relied on platforms like Google Colab and Runpod, which provided convenient access to the required resources.

# Architecture:

![image](https://github.com/Abdelrahman-Abuhelal/mysnake/assets/77440941/5439e42d-d0a6-4866-bcaf-69799d4460ad)

• Prefix Layer: Before analysis, SNAKE scrapes the content of the intranet page using Python functions. This layer captures all visible text and relevant metadata from the page. It then filters out unnecessary information such as advertisements, navigation links, or unrelated sections. Python functions parse this raw data, extracting meaningful segments that contain project-specific details, key terms, and important context.

• SNAKE begins by analyzing the filtered content of the intranet page that the user is currently viewing. It identifies key phrases, terminology, and contextual information to understand the project's scope and objectives.

• Leveraging its advanced language modeling capabilities, SNAKE generates user stories that align with the project's requirements. These user stories are designed to capture the needs and expectations of end-users, ensuring that the project's development team has a clear understanding of what is to be achieved.

• If the user has specific queries or requires additional details, they can interact with SNAKE through the user-friendly extension or GUI. SNAKE responds to their questions by providing insightful information related to the project context.

# Snake Extension:

![image](https://github.com/Abdelrahman-Abuhelal/mysnake/assets/77440941/bbd0e3d5-b563-40ef-8a31-13a5946dd8b4)
