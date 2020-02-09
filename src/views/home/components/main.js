import React, { useState } from 'react';

function Main() {
  const [name, setName] = useState('');

  return (
    <div
      style={{
        position: 'absolute',
        marginTop: 50,
        marginLeft: 240,
        height: 525,
        width: 1076,
        padding: 25,
        overflow: 'auto'
      }}
    >
      <form
        onSubmit={async e => {
          e.preventDefault();
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ebebeb',
          borderRadius: 4,
          height: 100,
          width: 400,
          justifyContent: 'center',
          padding: 20
        }}
      >
        <input
          placeholder="Add Category"
          onChange={e => {
            setName(e.target.value);
          }}
          value={name}
          style={{
            borderStyle: 'solid',
            border: 'none',
            borderRadius: 4,
            marginBottom: 20,
            height: 40,
            paddingLeft: 10,
            paddingRight: 10
          }}
        />
        <input
          type="submit"
          value="ADD"
          style={{
            borderStyle: 'solid',
            border: 'none',
            width: '100%',
            borderRadius: 4,
            height: 40,
            paddingLeft: 10,
            paddingRight: 10,
            color: 'white',
            cursor: 'pointer',
            backgroundColor: '#498de6'
          }}
        />
      </form>
      <input type="file" />
    </div>
  );
}

export default Main;
