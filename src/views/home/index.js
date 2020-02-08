import React, { useEffect } from 'react';
import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/react-hooks';

const GET_ADMINS = gql`
  {
    admins {
      id
      full_name
      email
      phone
    }
  }
`;

function Home() {
  const [getAdmins, { loading, data, error }] = useLazyQuery(GET_ADMINS);

  useEffect(() => {
    if (error) {
      error.graphQLErrors.map(({ message }, i) => {
        console.log(message);
      });
    }

    if (data) {
      console.log(data);
    }
  }, [error, data]);

  return (
    <div
      style={{
        display: 'flex',
        height: 625,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <button
        style={{
          height: 45,
          width: 250,
          borderStyle: 'solid',
          border: 'none',
          borderRadius: 4,
          color: 'white',
          fontSize: 16,
          backgroundColor: '#498de6',
          cursor: 'pointer'
        }}
        onClick={() => {
          getAdmins();
        }}
      >
        GET ADMINS
      </button>
    </div>
  );
}

export default Home;
