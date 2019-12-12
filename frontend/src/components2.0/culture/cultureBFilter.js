// import React from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import _ from 'lodash'
// import Select from 'react-select'

// import bookCards from './bookCards'

// class BookIndex extends React.Component {
//   constructor() {
//     super()

//     this.state = {
//       hs: [],
//       filterBooks: [],
//       searchTerm: '',
//       sortTerm: 'title|asc'
//     }

//     this.handleKeyUp = this.handleKeyUp.bind(this)
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSelect = this.handleSelect.bind(this)
//     this.handleFilters = this.handleFilters.bind(this)


//   }

//   componentDidMount() {
//     axios.get('/api/culture-books')
//       .then(res => {
//         let groups = res.data.map(book => {
//           return book.connections.category.split(', ')
//             .map(group => {
//               group = group.replace('Former', 'former')
//                 .replace('Incorporated', 'Inc.')
//               const match = group.match(/[A-Z][a-zA-Z0-9 .-]+/)
//               return match ? match[0].trim() : group
//             })
//         })
//           .reduce((flattened, groupArray) => flattened.concat(groupArray), [])
//           .filter(group => group.length < 50 && group !== '-')
//           .sort()

//         groups = Array.from(new Set(groups))

//         const objectGroups =groups.map(group => ({ value: group, label: group }))
//         console.log(objectGroups)

//         this.setState({ books: res.data, filteredBooks: res.data, groups, objectGroups })
//       })
//   }


//   handleFilters(e) {
//     const [fieldOne, fieldTwo, value] = e.target.value.split('|')
//     const filter = _.filter(this.state.cultureBData, book => {
//       return book[fieldOne][fieldTwo] === value
//     })

//     this.setState({ searchTerm: '' }, () => this.applySort(filter))
//   }

//   handleSelect(e) {
//     const filter = _.filter(this.state.books, book => {
//       return book.connections.category.includes(e.value)
//     })
//     console.log('handleGroupFilter is being called')
//     console.log(filter)
//     this.setState({ filtered: filter })
//     console.log(this.filteredBooks)
//     this.applySort(filter)
//   }

//   handleChange(e) {
//     this.setState({ sortTerm: e.target.value })
//     this.applySort(this.state.filteredBooks)
//   }

//   handleKeyUp(e) {
//     this.setState({ searchTerm: e.target.value })
//     const re = new RegExp(e.target.value, 'i')
//     const filter = _.filter(this.state.books, hero => {
//       return re.test(hero.name)
//     })
//     this.setState({ filteredBooks: filter })
//     this.applySort(filter)
//   }

//   applySort(filteredBooks) {
//     const [field, order] = this.state.sortTerm.split('|')
//     const sortedBooks = _.orderBy(filteredBooks, [field], [order])
//     this.setState({ filteredBooks: sortedBooks })
//   }

//   render() {
//     if (!this.state.books) return <h2>Loading...</h2>
//     return (
//       <section className="section has-navbar-fixed-top">
//         <div className="container">
//           <div className="columns is-multiline">
//             <div className="column is-one-fifth">

//               <div className="field">
//                 <label className="label has-text-white" htmlFor="search">Search</label>
//                 <div className="control">
//                   <input id="search" className="input" type="text" placeholder="search..." onChange={this.handleKeyUp} value={this.state.searchTerm} />
//                 </div>
//               </div>

//               <div className="field">
//                 <label className="label has-text-white" htmlFor="sortBy">Sort By</label>
//                 <div className="select">
//                   <select id="sortBy" onChange={this.handleChange}>
//                     <option value="title|asc">Title, ascending</option>
//                     <option value="title|desc">Title, descending</option>
//                     <option value="year|asc">Year, asscending</option>
//                     <option value="category.fiction|asc">Fiction, ascending</option>
//                     <option value="category.non-fiction|asc">Non-fiction, ascending</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="field">
//                 <div className="control">
//                   <label className="label has-text-white" htmlFor="findGroup">Find Group</label>
//                   <Select id="findGroup" onChange={this.handleSelect} options={this.state.objectGroups} />
//                 </div>
//               </div>

//               <div className="field">
//                 <label className="label has-text-white" htmlFor="filterBy">Filters</label>
//                 <div className="control">
//                   <button className="button is-fullwidth" value="category|fiction|non-fiction" onClick={this.handleFilters}>Fiction
//                   </button>
//                   <button className="button is-fullwidth" value="category|fiction|non-fiction" onClick={this.handleFilters}>Non-fiction
//                   </button>
//                   {/* <button className="button is-fullwidth" value="biography|publisher|DC Comics" onClick={this.handleFilters}>DC Comics
//                   </button>
//                   <button className="button is-fullwidth" value="appearance|race|Human" onClick={this.handleFilters}>Human
//                   </button>  */}
//                 </div>
//               </div>

//             </div>
//             <div className="column is-four-fifths">
//               <div className="columns is-multiline">
//                 {this.state.filteredBooks.map(book =>
//                   <div
//                     key={book.id}
//                     className="column is-one-third-desktop is-half-tablet"
//                   >
//                     <Link to={`/culuture-books/${book.id}`}>
//                       <bookCards
//                         title={book.title}
//                         image={book.image}
//                       />
//                     </Link>

//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   }
// }

// export default BookIndex