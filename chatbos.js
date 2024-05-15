document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var userInput = this.value.trim().toLowerCase();
        var chatBox = document.getElementById('chat-box');

        // Add user message to chat box
        var userMessageElement = document.createElement('div');
        userMessageElement.textContent = 'You: ' + userInput;
        userMessageElement.classList.add('chat-message');
        chatBox.appendChild(userMessageElement);

        // Respond based on user input
        if (userInput === 'hi') {
            var botMessageElement = document.createElement('div');
            botMessageElement.textContent = 'Dico-Ai: Hello sourav!';
            botMessageElement.classList.add('chat-message', 'bot');
            chatBox.appendChild(botMessageElement);
        } else if (userInput === 'todays diet') {
            var botMessageElement = document.createElement('div');
            botMessageElement.innerHTML = 'Dico-Ai: <br>Breakfast: <br>1. Oatmeal topped with fresh berries and a sprinkle of chopped nuts. <br>2. A boiled egg or a serving of Greek yogurt for protein. <br><br>Mid-Morning Snack: <br>A small apple with a tablespoon of almond butter. <br><br>Lunch: <br>1. Grilled chicken breast salad with lots of colorful vegetables like spinach, bell peppers, tomatoes, and cucumbers. <br>2. Dressing made with olive oil and vinegar or a light vinaigrette. <br><br>Dinner: <br>1. Baked salmon with quinoa and steamed broccoli. <br>2. A side salad with mixed greens, cherry tomatoes, and a lemon-tahini dressing.';
            botMessageElement.classList.add('chat-message', 'bot');
            chatBox.appendChild(botMessageElement);
        }
            else if (userInput === 'remove egg from my diet') {
                var botMessageElement = document.createElement('div');
                botMessageElement.innerHTML = 'Dico-Ai: <br>Breakfast: <br>1. Oatmeal topped with fresh berries and a sprinkle of chopped nuts. <br>2. A boiled potato or a serving of Greek yogurt for protein. <br><br>Mid-Morning Snack: <br>A small apple with a tablespoon of almond butter. <br><br>Lunch: <br>1. Grilled chicken breast salad with lots of colorful vegetables like spinach, bell peppers, tomatoes, and cucumbers. <br>2. Dressing made with olive oil and vinegar or a light vinaigrette. <br><br>Dinner: <br>1. Baked salmon with quinoa and steamed broccoli. <br>2. A side salad with mixed greens, cherry tomatoes, and a lemon-tahini dressing.';
                botMessageElement.classList.add('chat-message', 'bot');
                chatBox.appendChild(botMessageElement);
            }
            else if (userInput === 'todays workout') {
            var botMessageElement = document.createElement('div');
            botMessageElement.innerHTML = 'Dico-Ai:<br><br><strong>Warm-up (5-10 minutes):</strong><br> Start with a brisk walk, light jogging on the spot, or cycling at a moderate pace to get your heart rate up and prepare your muscles for exercise.<br><br><strong>Cardiovascular Exercise (20-30 minutes):</strong><br> Engage in aerobic exercises that elevate your heart rate and help burn calories. Options include brisk walking, cycling, swimming, dancing, or using cardio machines like treadmills or ellipticals. Aim for at least 150 minutes of moderate-intensity aerobic activity per week, spread across several days.<br><br><strong>Strength Training (2-3 times a week):</strong><br> Incorporate resistance training to build muscle strength and improve insulin sensitivity. You can use resistance bands, dumbbells, or bodyweight exercises like squats, lunges, push-ups, and planks. Perform 1-3 sets of 8-12 repetitions for each major muscle group.<br><br><strong>Flexibility and Balance (10-15 minutes):</strong><br> Include stretching exercises to improve flexibility and reduce the risk of injury. Practice yoga, tai chi, or simple stretching exercises targeting all major muscle groups. Also, incorporate balance exercises like standing on one leg or using stability balls to enhance balance and coordination.<br><br><strong>Cool-down (5-10 minutes):</strong><br> Finish your workout with a cooldown session to gradually lower your heart rate and prevent dizziness or muscle soreness. Perform gentle stretches for the muscles you worked.<br><br><strong>Hydration:</strong><br> Remember to stay hydrated throughout your workout by drinking water regularly, especially if you.';
            botMessageElement.classList.add('chat-message', 'bot');
            chatBox.appendChild(botMessageElement);
        }
       else if (userInput === 'todays schedule') {
        var botMessageElement = document.createElement('div');
        botMessageElement.textContent = 'Dico-Ai: Morning:\n\n' +
            '6:30 AM: Wake Up\n' +
            '6:45 AM: Hydration (Drink a glass of water)\n' +
            '7:00 AM: Blood Sugar Check\n' +
            '7:15 AM: Meditation/Stretching\n\n' +
            'Breakfast:\n\n' +
            '7:30 AM: Balanced Meal\n' +
            '7:45 AM: Medication\n\n' +
            'Mid-morning:\n\n' +
            '10:00 AM: Snack\n\n' +
            'Late Morning/Early Afternoon:\n\n' +
            '11:30 AM - 12:00 PM: Physical Activity (Exercise)\n' +
            '12:00 PM: Hydration\n\n' +
            'Lunch:\n\n' +
            '12:30 PM: Nutrient-Rich Meal\n' +
            '1:00 PM: Portion Control\n' +
            '1:15 PM: Medication\n\n' +
            'Afternoon:\n\n' +
            '3:00 PM: Blood Sugar Check\n' +
            '3:30 PM: Snack\n\n' +
            'Late Afternoon/Early Evening:\n\n' +
            '4:30 PM: Stress Reduction\n' +
            '5:30 PM: Meal Preparation\n' +
            '6:00 PM: Medication\n\n' +
            'Dinner:\n\n' +
            '6:30 PM: Balanced Dinner\n' +
            '7:00 PM: Portion Control\n\n' +
            'Evening:\n\n' +
            '7:30 PM: Light Activity\n' +
            '8:30 PM: Screen Time Reduction\n' +
            '9:00 PM: Blood Sugar Check\n\n' +
            'Night:\n\n' +
            '9:30 PM: Bedtime Routine\n' +
            '10:00 PM: Quality Sleep';
        botMessageElement.classList.add('chat-message', 'bot');
        chatBox.appendChild(botMessageElement);
    }
else if (userInput === 'reschedule 6:30 plan') {
    var botMessageElement = document.createElement('div');
    botMessageElement.textContent = 'Dico-Ai: Morning:\n\n' +
        'you can do the same task at 5 AM .Up\n' +
        '6:45 AM: Hydration (Drink a glass of water)\n' +
        '7:00 AM: Blood Sugar Check\n' +
        '7:15 AM: Meditation/Stretching\n\n' +
        'Breakfast:\n\n' +
        '7:30 AM: Balanced Meal\n' +
        '7:45 AM: Medication\n\n' +
        'Mid-morning:\n\n' +
        '10:00 AM: Snack\n\n' +
        'Late Morning/Early Afternoon:\n\n' +
        '11:30 AM - 12:00 PM: Physical Activity (Exercise)\n' +
        '12:00 PM: Hydration\n\n' +
        'Lunch:\n\n' +
        '12:30 PM: Nutrient-Rich Meal\n' +
        '1:00 PM: Portion Control\n' +
        '1:15 PM: Medication\n\n' +
        'Afternoon:\n\n' +
        '3:00 PM: Blood Sugar Check\n' +
        '3:30 PM: Snack\n\n' +
        'Late Afternoon/Early Evening:\n\n' +
        '4:30 PM: Stress Reduction\n' +
        '5:30 PM: Meal Preparation\n' +
        '6:00 PM: Medication\n\n' +
        'Dinner:\n\n' +
        '6:30 PM: Balanced Dinner\n' +
        '7:00 PM: Portion Control\n\n' +
        'Evening:\n\n' +
        '7:30 PM: Light Activity\n' +
        '8:30 PM: Screen Time Reduction\n' +
        '9:00 PM: Blood Sugar Check\n\n' +
        'Night:\n\n' +
        '9:30 PM: Bedtime Routine\n' +
        '10:00 PM: Quality Sleep';
    botMessageElement.classList.add('chat-message', 'bot');
    chatBox.appendChild(botMessageElement);
}

      else {
            var botMessageElement = document.createElement('div');
            botMessageElement.innerHTML = '<strong>Dico-Ai: Personalized Diet:</strong><br><br>' +
                '<strong>Carbohydrate Management:</strong> Carbohydrates directly affect blood sugar levels, so it\'s crucial to monitor and control carbohydrate intake. A registered dietitian can help develop a personalized carbohydrate plan tailored to individual needs, considering factors like age, weight, activity level, and blood sugar goals.<br><br>' +
                '<strong>Balanced Nutrition:</strong> Focus on consuming a balanced diet that includes a variety of nutrient-rich foods such as fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit intake of processed foods, sugary snacks, and beverages high in added sugars.<br><br>' +
                '<strong>Portion Control:</strong> Monitoring portion sizes is essential to prevent spikes in blood sugar levels. Use measuring tools or visualize portion sizes to maintain consistency.<br><br>' +
                '<strong>Meal Timing:</strong> Distribute meals and snacks evenly throughout the day to prevent extreme fluctuations in blood sugar levels. Aim for regular meal times and avoid skipping meals.<br><br>' +
                '<strong>Monitoring:</strong> Regularly monitor blood sugar levels to assess how different foods and meals affect blood glucose. Adjust dietary choices accordingly based on individual responses.<br><br>' +
                '<strong>Personalized Workout:</strong><br><br>' +
                '<strong>Consultation:</strong> Before starting any exercise program, consult with a healthcare provider to ensure safety, especially if there are pre-existing health conditions or concerns.<br><br>' +
                '<strong>Aerobic Exercise:</strong> Engage in regular aerobic activities such as walking, cycling, swimming, or dancing to improve insulin sensitivity and help control blood sugar levels. Aim for at least 150 minutes of moderate-intensity aerobic exercise per week.<br><br>' +
                '<strong>Strength Training:</strong> Incorporate resistance training exercises using body weight, resistance bands, or free weights to build muscle mass, which can enhance insulin sensitivity and improve glucose metabolism. Aim for 2-3 sessions per week targeting major muscle groups.<br><br>' +
                '<strong>Flexibility and Balance:</strong> Include stretching exercises and activities that improve flexibility, balance, and coordination, such as yoga or tai chi. These can help reduce the risk of falls and injuries, especially in older adults with diabetes.<br><br>' +
                '<strong>Consistency:</strong> Consistency is key to reaping the benefits of exercise. Establish a regular workout routine and gradually increase intensity and duration over time, while listening to your body\'s signals and adjusting as needed.<br><br>';
            botMessageElement.classList.add('chat-message', 'bot');
            chatBox.appendChild(botMessageElement);
        }

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;

        // Clear input field
        this.value = '';
    }
});