/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

//should start with a 'string', 'number', 'null', 'boolean', '{', '['.
//removed variable name and template literal

{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15", //missing comma, should be a comma after each key/value pair
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson", //missing quotes around "name", key/value pairs should have double quotes if they are a string
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,  //should be a 'string', 'number', 'null', 'boolean', '{', '['. //changed 'undefined' to 'null'
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"] //deleted trailing comma, trailing commas are incorrect syntax in json
  }
}



// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?

I used jsonlint.com to identify each error.

2️⃣ How did you confirm that your corrected JSON file was valid?

I ran the json validator on jsonlint to confirm the file is valid after corrections.

3️⃣ Which errors were the most difficult to spot? Why?

Missing commas are easy to miss since they blend in 

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)

   Using linters could help avoid these errors in the future.
*/
