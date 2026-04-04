//how to write comments


function findTopLeft(pointList){
    var maxLat = null;
    var minLon = null;

    pointList.data.forEach(
        point => {
            if (maxLat == null) {
                maxLat = point.lat
                minLon = point.lon
            }
            
            else{
                if (point.lat > maxLat){
                    maxLat = point.lat
                }

                if (point.lon < minLon) {
                    minLon = point.lon
                }
            }
        }
    )

    return {"pointId": 1, "lat": maxLat, "lon": minLon}

}



//Find top Right (biggest lat, biggest lon)
function findTopRight(pointList){
    var maxLat = null;
    var maxLon = null;

    pointList.data.forEach(
        point => {
            if (maxLat == null) {
                maxLat = point.lat
                maxLon = point.lon
            }
            
            else{
                if (point.lat > maxLat){
                    maxLat = point.lat
                }

                if (point.lon > maxLon) {
                    maxLon = point.lon
                }
            }
        }
    )

    return {"pointId": 2, "lat": maxLat, "lon": maxLon}

}


//Find Bottom left (smallest lat, smallest lon)
function findBottomLeft(pointList){
    var minLat = null;
    var minLon = null;

    pointList.data.forEach(
        point => {
            if (minLat == null) {
                minLat = point.lat
                minLon = point.lon
            }
            
            else{
                if (point.lat < minLat){
                    minLat = point.lat
                }

                if (point.lon < minLon) {
                    minLon = point.lon
                }
            }
        }
    )

    return {"pointId": 3, "lat": minLat, "lon": minLon}

}


//Find Bottom Right (smallest lat, biggest lon)
function findBottomRight(pointList){
    var minLat = null;
    var maxLon = null;

    pointList.data.forEach(
        point => {
            if (minLat == null) {
                minLat = point.lat
                maxLon = point.lon
            }
            
            else{
                if (point.lat < minLat){
                    minLat = point.lat
                }

                if (point.lon > maxLon) {
                    maxLon = point.lon
                }
            }
        }
    )

    return {"pointId": 4, "lat": minLat, "lon": maxLon}

}


function Run(){
    var topLeftPoint = findTopLeft(data);
    var topRightPoint = findTopRight(data);
    var bottomLeftPoint = findBottomLeft(data);
    var bottomRightPoint = findBottomRight(data);

    var boundingBox = {
        topLeft: topLeftPoint,
        topRight: topRightPoint,
        bottomLeft: bottomLeftPoint,
        bottomRight: bottomRightPoint

    }

    console.log("Bounding box computed for aez24@tamu.edu: ");
    console.log(boundingBox);
}
