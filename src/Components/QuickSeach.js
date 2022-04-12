import React from 'react';
import '../Styles/home.css';
import QuickSearchItem from './QuickSearchItem';

class QuickSearch extends React.Component {
    render() {
        const { mealtypesData } = this.props;
        return (
            <div>
                <div className="quicksearch">
                    <p className="quicksearchHeading">
                        Quick Searches
                    </p>
                    <p className="quicksearchSubHeading">
                        Discover restaurants by type of meal
                    </p>

                    <div className="container-fluid">
                        <div className="row">
                            {mealtypesData.map(item => {
                                return <QuickSearchItem
                                    heading={item.name}
                                    description={item.content}
                                    image={item.image}
                                    id={item.meal_type}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuickSearch;