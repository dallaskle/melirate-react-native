export function BodyFat(bodyFat, timestamp) {
    this.timestamp = timestamp ? timestamp : new Date().toISOString().slice(0,16);
    this.bodyFat = bodyFat;
}