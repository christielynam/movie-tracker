import { connect } from 'react-redux';
import Body from '../components/App/Body/Body';


// const mapStateToProps = (state) => {
//   return {
//
//   }
// }
//
// const dispatchStateToProps = (dispatch) => {
//   return {
//
//   }
// }

export default connect(null, null)(Body);

//dont think we need a body container
//we will just need containers for any component that needs access to the store ie... movieDirectory, FullMovieDetail, MovieCard
