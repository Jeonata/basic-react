import React from 'react';
import api from '../../services/api';

// import api from '../../services/api';
// import { Container } from './styles';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { datas: [] };
  }

  async componentDidMount() {
    const response = await api.get('url');

    const data = response.data.map(res => ({
      ...res,
      formattedData: `Olá ${res.name}`,
    }));

    this.setState({ datas: data });
  }

  render() {
    const { datas } = this.state;

    return (
      <div>
        {datas.map(data => (
          <div key={data.id}>{data.formattedData}</div>
        ))}
      </div>
    );
  }
}
