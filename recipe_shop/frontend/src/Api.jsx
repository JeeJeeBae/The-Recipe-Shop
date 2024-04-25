// import Airtable from "airtable";

// const airtableBase = new Airtable({
//   apiKey:
//     "patZj5PZ2I5JSjmtv.002979831666ab4db0936bc4c9a1826db95c9d4143d2602f44db83d60dcbfcc0",
// }).base("appuNXGqK5CDSucNi");

// const saveRecipeToAirtable = async (recipe) => {
//   const endpoint = "https://api.airtable.com/v0/appuNXGqK5CDSucNi/table";
//   console.log(recipe);
//   const body = {
//     records: [
//       {
//         fields: {
//           title: recipe.title,
//           image: [{ url: recipe.image }],
//           time: "Ready in " + recipe.time + " minutes",
//         },
//       },
//     ],
//   };

//   console.log(JSON.stringify(body));
//   const response = await fetch(endpoint, {
//     method: "POST",
//     headers: {
//       Authorization:
//         "Bearer patZj5PZ2I5JSjmtv.002979831666ab4db0936bc4c9a1826db95c9d4143d2602f44db83d60dcbfcc0",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to save recipe");
//   }
// };

// export { airtableBase, saveRecipeToAirtable };
