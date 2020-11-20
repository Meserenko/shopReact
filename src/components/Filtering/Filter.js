import React from "react";
import './Filter.css'

class Filter extends React.Component {

    render() {
        return (
                <div className="filters">
                        <b>FILTER BY </b>
                        <select
                            className="filterForm"
                            value={this.props.sort}
                            onChange={(event) => {
                                this.props.sortProducts(
                                    this.props.filteredProducts,
                                    event.target.value
                                );
                            }}
                        >
                            <option value="">Default</option>
                            <option value="lowestprice">Lowest to highest price</option>
                            <option value="highestprice">Highest to lowest price</option>
                            <option value="atoz">A-Z</option>
                            <option value="ztoa">Z-A</option>
                        </select>
                </div>
        );
    }

}
export default Filter