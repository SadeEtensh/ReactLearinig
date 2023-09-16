export const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

// export default Greet;
// Defalt export- U can import the Componet with any Name U like

// Named Export
// if we append export to function export const funcName---we have to import the func with exact name
// we have to destructure import
