import React, { Component } from "react";
import { connect } from "react-redux";
import {
  retrieveAds,
  findAdsById
} from "../actions/ads";
import { Link } from "react-router-dom";

class AdsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchId = this.onChangeSearchId.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveAds = this.setActiveAds.bind(this);
    this.findById = this.findById.bind(this);

    this.state = {
      currentAd: null,
      currentIndex: -1,
      searchId: "",
    };
  }

  componentDidMount() {
    this.props.retrieveAds();
  }

  onChangeSearchId(e) {
    const searchId = e.target.value;

    this.setState({
      searchId: searchId,
    });
  }

  refreshData() {
    this.setState({
      currentAd: null,
      currentIndex: -1,
    });
  }

  setActiveAds(ad, index) {
    this.setState({
      currentAd: ad,
      currentIndex: index,
    });
  }

  findById() {
    this.refreshData();

    this.props.findAdsById(this.state.searchId);
  }

  render() {
    const { searchId, currentAd, currentIndex } = this.state;
    const { ads } = this.props;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by id"
              value={searchId}
              onChange={this.onChangeSearchId}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.findById}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Ads List</h4>
          <hr></hr>
          <table className="table table-bordered"><thead><tr><th>Id</th><th>CompanyId</th><th>PrimaryText</th><th>headline</th>
            <th>CTA</th><th>ImageUrl</th></tr></thead>
            <tbody>
              {ads.map((ad, index) => (
                  <tr>
                    <td key={ads.id}>
                      {ad.id}
                    </td>
                    <td>
                      {ad.companyId}
                    </td>
                    <td>
                      {ad.primaryText}
                    </td>
                    <td>
                      {ad.headline}
                    </td>
                    <td>
                      {ad.CTA}
                    </td>
                    <td>
                      {ad.imageUrl}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
       
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ads: state.ads,
  };
};

export default connect(mapStateToProps, {
  retrieveAds,
  findAdsById
})(AdsList);
