const StyledButton = () => {

    const heading = "Styled Button Demo"
    const headingStyle = {fontSize: "16px", color: "blue", backgroundColor: "yellow", letterSpacing: "3px", textAlign: "center"};
    const buttonStyle = {padding: "10px", border: "solid, 5px, black", borderRadius: "5px", color: "red", backgroundColor: "#c4c4c4"};
    const buttonFontSize = {fontSize: "20px"};
    let buttonDisable = true; 
    
    if (Math.random() < 0.5) {
        buttonDisable = false;
    }



  return (
    <div>
      <h1 style={headingStyle}>{heading}</h1>
      <button className="buttonClass" style={{...buttonStyle, ...buttonFontSize}} disabled={buttonDisable} value="click here!">Click here!</button>
    </div>
  );
};

export default StyledButton;