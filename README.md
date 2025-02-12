# Personal Finance Tracker

## Overview

The Personal Finance Tracker is a web application designed to help users manage their finances by tracking expenses over time. The app allows users to add, update, and delete expenses, view expense reports, and generate visualizations like line charts and pie charts. It is built using React.js for the frontend and Spring Boot with PostgreSQL for the backend.

## Features

- **Expense Tracking**: Add, update, and delete expenses.
- **Data Visualization**: View expenses using line charts and pie charts.
- **Filter by Date**: Filter expenses by date range to view specific periods.
- **Responsive Design**: User-friendly interface that adapts to different screen sizes.
- **Current Month Data**: Automatically displays data for the current month by default.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS (for styling)
- **Backend**: Spring Boot
- **Database**: PostgreSQL
- **Charts**: Chart.js for data visualization

## Installation

### Prerequisites

- **Node.js**: Ensure Node.js is installed. You can download it from [nodejs.org](https://nodejs.org/).
- **Java**: Ensure Java is installed for running Spring Boot. You can download it from [java.com](https://www.java.com/).
- **PostgreSQL**: Ensure PostgreSQL is installed and running. You can download it from [postgresql.org](https://www.postgresql.org/).

### Frontend

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/personal-finance-tracker.git
   ```

2. Navigate to the frontend directory:

   ```bash
   cd personal-finance-tracker/frontend
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

### Backend

1. Navigate to the backend directory:

   ```bash
   cd personal-finance-tracker/backend
   ```

2. Configure the `application.properties` file with your PostgreSQL database credentials.

3. Build and run the Spring Boot application:

   ```bash
   ./mvnw spring-boot:run
   ```

   The backend will be available at `http://localhost:8080`.

## Usage

1. **Add an Expense**: Use the form on the dashboard to add new expenses, including the date, amount, and description.
2. **Update an Expense**: Click on the "Edit" button next to an expense to update its details.
3. **Delete an Expense**: Click on the "Delete" button next to an expense to remove it.
4. **Filter Expenses**: Use the date filters to view expenses within a specific range.
5. **View Charts**: Analyze your expenses using the line chart and pie chart displayed on the dashboard.

## Contributing

Contributions are welcome! To contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes and push them to your fork.
4. Open a pull request against the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out to [your-email@example.com](mailto:your-email@example.com).

```

Feel free to modify the contact information and any other details to fit your specific needs. Let me know if you need any more adjustments!
