# MY_Course_Roster

- This is a course registration web application built using React hooks like `useState` &`useEffect`

## Project Features

- **Course Listing**: Display a list of available courses, including details like course name, instructor, and availability.

- **Course Search**: Enable users to search for courses based on keywords, or course codes.

- **Course Details**: Provide detailed information about each course, including the syllabus, schedule, and prerequisites.

- **Notifications**: Implement real-time notifications to inform users about important updates, such as new course availability or class cancellations.

- **Responsive Design**: Ensure that the application is responsive and works well on various devices, including desktops, tablets, and mobile phones.

## Managing the States

### `useState` Hook

- **Course Data State**: The course data, including the list of available courses and the user's enrolled courses managed by using `useState` to ensure to show up-to-date data about available courses.

### `useEffect` Hook

- **Fetching Data**: I use `useEffect` hook to fetch data from my custom API/ JSON File, that includes cover image, course title, price, credit/hour etc data.

- **Set Data**: I also used `useEffect` to set data to set_Function which is relevant to a`useState`.
