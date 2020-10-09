import React from "react";

export default class RandomUser extends React.Component {

    //need to know whether we have fetch the data
    state = {
        loading: true,
        // person: null,
        people: []
    }

    //fetch data here
    async componentDidMount() {
        //1. get api url
        // const url = "https://api.randomuser.me/";
        // const response = await fetch(url); //http request, asynchronous
        // const data = await response.json();
        // console.log(data.results[0]);
        // //when get a person, set loading to false
        // this.setState({
        //     person: data.results[0],
        //     loading: false
        // })



        //2. handling array
        //?results=5 api end points to handle 5 user
        const url5 = "https://api.randomuser.me/?results=5";
        const response = await fetch(url5); //http request, asynchronous
        const data = await response.json();
        console.log(data.results);
        //when get a person, set loading to false
        this.setState({
            people: data.results,
            loading: false
        })


    }

    // render() {

    //     return (
    //         <div> {this.state.loading || !this.state.person ? (<div>loading...</div>) : (<div><span>{this.state.person.name.first}</span><span>{this.state.person.name.last}</span><img src={this.state.person.picture.large} alt="" /></div>)}</div>);
    // }

    //another way
    // render() {
    //     if (this.state.loading) {
    //         return <div>loading...</div>
    //     }
    //     if (!this.state.person) {
    //         return <div>did not get a person</div>
    //     }
    //     return (
    //         <div>
    //             <span>{this.state.person.name.first}<br /></span>
    //             <span>{this.state.person.name.last}</span>
    //             <div><img src={this.state.person.picture.large} alt="" /></div>
    //         </div>
    //     )

    // }

    //rendering array using map function
    render() {
        if (this.state.loading) {
            return <div>loading...</div>
        }
        if (!this.state.people.length) {
            return <div>did not get a person</div>
        }

        //3. storing in variable
        // let peopleJsx = this.state.people.map((person, i) => (
        //     // <div key={`key-${i}`} >
        //     <div key={person.name.first + person.name.last} >
        //         <span>{person.name.first}<br /></span>
        //         <span>{person.name.last}</span>
        //         <div><img src={person.picture.large} alt="" /></div>
        //     </div>
        // ))

        //4. using forEach instead of map function
        let peopleJsx = [];
        this.state.people.forEach(person => {
            peopleJsx.push(
                <div key={person.name.first + person.name.last} >
                    <span>{person.name.first}<br /></span>
                    <span>{person.name.last}</span>
                    <div><img src={person.picture.large} alt="" /></div>
                </div>
            )
        })

        return (
            <div>
                {/* 1. should always have 1 root/div only! */}
                {/* when rendering array make sure the root has been assigned a unique key/string */}
                {/* {this.state.people.map(person => (
                    <div key={person.login.uuid} >
                        <span>{person.name.first}<br /></span>
                        <span>{person.name.last}</span>
                        <div><img src={person.picture.large} alt="" /></div>
                    </div>
                ))
                } */}



                {/* 2. coming up with your own uuid */}
                {/* last resort, do not use this! */}
                {/* {this.state.people.map((person, i) => (
                    // <div key={`key-${i}`} >
                    <div key={person.name.first + person.name.last} >
                        <span>{person.name.first}<br /></span>
                        <span>{person.name.last}</span>
                        <div><img src={person.picture.large} alt="" /></div>
                    </div>
                ))
                } */}



                {/* storing in variable */}
                {peopleJsx}
            </div>
        )

    }
}