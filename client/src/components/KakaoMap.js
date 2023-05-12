/* global kakao */
import React, { useEffect } from 'react'
import '../css/kakaomap.scss';

const { kakao } = window;

const KakaoMap = ({ geoLocation }) => {

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567),
            level: 1
        }
        const map = new kakao.maps.Map(container, options);
        var geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch(geoLocation, function (result, status) {
            function setDraggable(draggable) {
                map.setDraggable(draggable);
            }
            if (status === kakao.maps.services.Status.OK) {
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });
                var infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:150px;text-align:center;padding:6px 0;">심부름 요청지</div>'
                });
                infowindow.open(map, marker);
                map.setCenter(coords);
            }
        });
    }, [])

    return (
        <div id='map' style={{
            width: "500px",
            height: "500px"
        }}>

        </div>
    )
}

export default KakaoMap
