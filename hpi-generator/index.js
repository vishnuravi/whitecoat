exports.createHPI = (patient, symptom) => {
    return `${patient.name} is a ${patient.age} year old ${patient.gender} presenting with ${symptom.name}. 
    It started around ${symptom.onset}, and since then it has overall been getting ${symptom.progression}. 
    Patient describes it as "${symptom.description}" and rates it as a ${symptom.severity} on a scale of 1-10. 
    Associated symptoms include "${symptom.associated}". It gets better with "${symptom.alleviating}" and gets worse with "${symptom.aggravating}".`;
}