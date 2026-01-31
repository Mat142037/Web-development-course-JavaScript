
export const TicketInfo = ({result, image, count, children}) => {
const handleClick = () => {
  alert(`Details fot the folloing status: ${children}
    The current ticket count for this status is ${count}`
  );
}

  return (
    <div className={result} onClick={handleClick}>
      <h3>{children}</h3>
      <img src={image} alt={result} />
      <p>Count: {count}</p>
    </div>
  )}

