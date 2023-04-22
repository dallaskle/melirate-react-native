export function WeightEntry(bodyWeight, bodyFat, muscle, hydration, timestamp) {
    this.timestamp = timestamp ? timestamp : new Date().toISOString().slice(0,16);
    this.bodyWeight = bodyWeight;
    this.bodyFat = bodyFat;
    this.muscle = muscle;
    this.hydration =     this.hydration = hydration;
    ;
}