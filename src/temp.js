
<textarea
    placeholder=“职位全称”
value={this.state.name}
className=“form-control”
style={{fontSize: ‘1.875vw’}}
rows=“1”
onChange={(e) => {
    this.setState({
        name: e.target.value
    });
}}
/>