import React, {Component, Fragment} from 'react'
import cn from 'classnames'

import styles from './styles.styl'

class ShowMoreOrLess extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	isOpen: false,
	    }
  	}

  	toggle = () => {
    	this.setState({ isOpen: !this.state.isOpen });
	}

	getRenderedItems() {

		const {row, perRowElements, items} = this.props
	    if (this.state.isOpen) {
	      return items;
	    }

	    // for (let i = 0 ; i< row && this.props.items.length > perRowElements; i++) {
	    // 	elements.push( this.props.items.slice(0, 4))
	    // }
		// let elements = []
		// for (let i = 0 ; i<  row; i++) {
		// 	elements.push(items.slice(i*perRowElements, perRowElements*(i+1)))
		// }
		//
		// console.log(elements)
		// return elements
	    return this.props.items.slice(0, row*perRowElements)
  	}

  	render() {
	    return(
	    	<Fragment>
	      		<div className="row">
		       		{
		       			this.getRenderedItems().map((item, id) => (
			          		<div className="col-sm-6  col-md-4 col-lg-3 text-center" key={id}>
			          			<div className={cn(styles['my-4'], styles['px-4'], styles['w-100'])}>
			          				<img src={item} />
			          			</div>
		          			</div>
		        		))
		       		}
	      		</div>
		      	<button onClick={this.toggle} className={cn(styles['w-100'], styles['button-color'], 'btn btn-link')}>
		         	{this.state.isOpen ? 'Show Less' : 'View More'}
		        </button>
	        </Fragment>
	    );
  	}
}
export default ShowMoreOrLess