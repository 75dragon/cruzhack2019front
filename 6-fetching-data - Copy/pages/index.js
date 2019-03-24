import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
//   <h1>Student</h1>
//   <ul>
//     {props.shows.map(({show}) => (
//       <li key={show.id}>
//         <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//           <a>{show.name}</a>
//         </Link>
//       </li>
//     ))}
//   </ul>
var isCheckedIn = 0;
var totalPeople = 0;
var dietaryAccommodations  = 0;
var physicalAccommodations = 0;

const Index = (props) => (
  <Layout>
    <div>
      <ul>
      {fillList(props)}
      </ul>
      <p>
        {isCheckedIn} / {totalPeople} people checked in; {dietaryAccommodations} dietary accommodations; {physicalAccommodations} physical accommodations 
      </p>
    </div>
  </Layout>
)

function fillList( props )
{
  isCheckedIn = 0;
  totalPeople = props.count;
  dietaryAccommodations  = 0;
  physicalAccommodations = 0;
  var toDisplay = []
  var i = 0;
  for (i = 0; i < totalPeople; i++)
  {
    var displayString = ""
    var holdPerson = props.results[i];
    if( holdPerson.isCheckedIn )
    {
      isCheckedIn++;
    }
    if( holdPerson.physicalAccommodations )
    {
      physicalAccommodations++;
    }
    if( holdPerson.dietaryAccommodations )
    {
      dietaryAccommodations++;
    }
    displayString = holdPerson.name + "    " + holdPerson._id + "     " + holdPerson.phone
    toDisplay.push(displayString);
  }
  return toDisplay.map((toDisplay) => <li>{toDisplay}</li>);
}

Index.getInitialProps = async function() {
  const res = await fetch('https://cruzhacks-2020-demo-hacker-api.azurewebsites.net/api')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return data
}

export default Index
