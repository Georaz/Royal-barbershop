import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import c from './ContactsSection.module.css';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import pin from '../../../images/pin.svg';
import shadowpin from '../../../images/shadowpin.svg';

const pointerIcon = new L.Icon({
    iconUrl: pin,
    shadowUrl: shadowpin,
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [19, 70], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 42],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})

const MapWrapper = () => {
    const position = [59.958621, 30.311998];
    return (
        <div className={c.mapWrapper}>
            <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={pointerIcon}>
                    <Popup>
                        Royal Barber is right here, pal.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default MapWrapper;