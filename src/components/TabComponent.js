import React, { Component } from 'react';
import {Tab, Tabs, TabPanel, TabList} from 'react-tabs';
import TabContentOne from './TabContentOne';
import TabContentTwo from './TabContentTwo';
import TabContentThree from './TabContentThree';

class TabComponent extends Component {
    state = {
        tabIndex: 0,
    }
    render() {
        return (
            <div className="main-booking-tab mx-auto">
                <Tabs className="tabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({tabIndex})}>
                    <TabList className="tab-nav-container">
                        <Tab className={`${this.state.tabIndex === 0 ? 'active' : null}`}>
                            <i class="fas fa-plane-departure"></i>
                            Flight
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? 'active' : null}`}>
                            <i class="fas fa-kaaba"></i>
                            Umrah Flight
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? 'active' : null}`}>
                            <i class="fas fa-users"></i>
                            Group Flight
                        </Tab>
                    </TabList>
                    
                    {/* tab content One */}
                    <TabPanel>
                        <div className="tab-main-content">
                            <TabContentOne/>
                        </div>
                    </TabPanel>

                    {/* tab content Two */}
                    <TabPanel>
                        <div className="tab-two-main-content">
                            <TabContentTwo/>
                        </div>
                    </TabPanel>

                    {/* tab content Three */}
                    <TabPanel>
                        <div className="tab-three-main-content">
                            <TabContentThree/>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}
export default TabComponent