const pageElements = [
    {
      htmlElementName: 'div',
      innerHTML: 'Hello World inside blue box!',
      
      style: {
        border: '1px solid blue',
        backgroundColor: '#edeff2',
        color: '#4d4d4d',
    },
  },
  {
    htmlElementName: 'div',
    innerHTML: 'Hello World inside red box!',

    style: {
      border: '1px solid red',
      backgroundColor: '#edeff2',
      color: '#4d4d4d',
    },
  },
  {
    htmlElementName: 'div',
    innerHTML: 'Hello World inside yellow box!',

    style: {
      border: '1px solid yellow',
      backgroundColor: '#edeff2',
      color: '#4d4d4d',
    },
  },
];

const DynamicComponent = () =>{
    return(
        <div>
        {
        pageElements.map(item=>(
          <item.htmlElementName style={item.style}>{item.innerHTML}</item.htmlElementName>
        ))
      }
        </div>
    );
}

export default DynamicComponent;