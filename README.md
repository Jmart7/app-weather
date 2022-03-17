# weather-app

## Instructions to Install and run

<ul>
    <li>Run `node -i` in both Frontend and Backend folders</li>
    <li>For frontend the command is `npm run start`</li>
    <li>For backend the command is `node weatherRun.js</li>
    <li>Frontend port is 3000 and Backend is on 3010</li>
</ul>

## Follow-up Questions

### Question

Did you face any challenge with the test? If so, what is the biggest challenge you faced?

### Answer

Yes, the most challenging situation i faced was the connection between the backend and frontend, as i have to adapt all the backend to what the frontend wants as response.

### Question

How long did it take you to complete the assignment?

### Answer

As for the backend, it took me like 1.5 hours or 2 hours but with what i mentioned in the previous question, there were a lot of adaptations i had to do like filtering the JSON i got from the api, as it gives much more information than i needed. So it took me much more time as i've been modifying the code as soon as i found something else to add or to remove.

### Question

If you had more time, what would you add to your code?

### Answer

First of all, the bonus, which i didn't do.
I would dockerize it so it can be loaded in only one command.
Also, i could add much more Styling to the page with more in deep CSS.
Finally, handling errors could be improved as i had a simple try catch.

### Question

How would you test your code? Describe a few tests you would write for this task.

### Answer

I would test if the response i get from the API is correct by passing a non-existant city and a real city and checking if the expected output is the same as the real output.
Also i could try to see if there is any vulnerability by checking each function.
Finally i would do an E2E test by using the api and testing each combination (as there are only 12) and see if it works well.

## Comments

<ul>
    <li>The .env from the backend is included in order to facilitate testing the application. In a real world app, the .env file won't be commited as i did.</li>
    <li>I tried asking but got no response so i made the decision to instead of getting the day and night time, i show the min and max temperature of a day. This decision was made because the api doesn't provide such field in the json i got as the response.</li>
    <li>Also i created a private git repository but no username was given to me so i can't give access to it, that's why i'm giving the zip instead.</li>
</ul>
