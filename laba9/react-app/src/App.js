const Square = ({n = 3}) =>{
  return (
    <div>
      {n * n}
      <OnlyEven />
      <Temperature />
    </div>
  )
}


const OnlyEven  = ({arr = [14, 5, 6, 12, 21, 2]}) =>{
  let newArr = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
      newArr.push(arr[i] + " ")
    }
  }
  return(
    <div>{newArr}</div>
  )
}
  
const t = prompt()
const Temperature = () => {
  const temperatureColor = t <= 0 ? 'blue' : 'red';
  return (
    <div style={{ color: temperatureColor }}>
      {t}
    </div>
  );
}

export default Square;
