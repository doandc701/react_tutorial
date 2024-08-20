import React from 'react';
import YoutubeItem from './item';
import { YOUTUBE_DATA } from '../../configs/constants';

const YoutubeList = () => {
    return (
        <div>
            <div className="youtube-list">
                {YOUTUBE_DATA.map((item, index) => {
                    // kiểm tra điều kiện để thêm class mới
                    const newClass = index === 1 ? 'youtube-item-first' : '';
                    return (
                        <YoutubeItem
                            key={index}
                            image={item.image}
                            avatar={item.avatar || item.image}
                            title={item.title}
                            auth={item.auth}
                            className={newClass}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default YoutubeList;
