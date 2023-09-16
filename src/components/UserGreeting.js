export const UserGreeting = () => {
  const isLoggedin = false;
  //   return <div>Welcome {isLoggedin ? "Sade" : "Guest"}</div>;
  return <div>Welcome {isLoggedin && "Sade"}</div>; // Short cercuit
};

//Conditional Rendering
// 2 Approaches
// 1. Ternary approach
// 2. short cericuit operator approach
