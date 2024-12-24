

const page = ({ params } : {params : { id : string}}) => {
  const { id } = params
  return (
    <div>user ID is {id}</div>
  )
}

export default page