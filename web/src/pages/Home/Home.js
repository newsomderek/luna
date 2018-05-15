import React, { Component } from 'react';

import { 
  ImageList,
  ImageListItem,
  ImageListImage,
  ImageListSupporting,
  ImageListLabel
} from 'rmwc/ImageList';

class Home extends Component {
    
    render() {
        return (
            <div>
                <ImageList
                  masonry
                  withTextProtection
                  style={{
                    columnCount: 4,
                    columnGap: '16px',
                    maxWidth: '1000px'
                  }}>
                    <ImageListItem style={{ marginBottom: 16 }}>
                      <ImageListImage src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/272c3afc6739b6e50dbadda47a4afcf5/photo-1503264116251-35a269479413.jpg" />
                      <ImageListSupporting>
                        <ImageListLabel>Personal</ImageListLabel>
                      </ImageListSupporting>
                    </ImageListItem>
                    
                     <ImageListItem style={{ marginBottom: '16px' }}>
                      <ImageListImage src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/670c94bac5f3e71e66671e5e187c0160/photo-1482440308425-276ad0f28b19.jpg" />
                      <ImageListSupporting>
                        <ImageListLabel>Inqubator</ImageListLabel>
                      </ImageListSupporting>
                    </ImageListItem>
                    
                     <ImageListItem style={{ marginBottom: '16px' }}>
                      <ImageListImage src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/7e10e89b4b12aa96b3713966d37b1afe/photo-1481966115753-963394378f23.jpg" />
                      <ImageListSupporting>
                        <ImageListLabel>VendorHub</ImageListLabel>
                      </ImageListSupporting>
                    </ImageListItem>
                    
                     <ImageListItem style={{ marginBottom: '16px' }}>
                      <ImageListImage src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/634b12292fe6965e706a365c192c0c54/photo-1524936987904-0ee26e8730ed.jpg" />
                      <ImageListSupporting>
                        <ImageListLabel>Nvoicepay</ImageListLabel>
                      </ImageListSupporting>
                    </ImageListItem>
                </ImageList>

            </div>
        );
    }
    
}

export default Home;
