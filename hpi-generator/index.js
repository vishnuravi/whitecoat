function progressionToString(progression){
    switch(progression){
        case 'better' || 'worse':
            return `it has been getting ${progression}`;
        case 'same':
            return 'it has been about the same';
        default: 
            return 'the progression is unclear';
    }
}

exports.createHPI = (data) => {
    // generates a HPI by filling in string templates
    const {
        name, 
        age, 
        gender, 
        symptom, 
        onset, 
        progression, 
        description, 
        severity, 
        associated, 
        alleviating, 
        aggravating
    }  = data;

    // fill in template sentences if corresponding data is available
    const idString = (name && age && gender && symptom) ?`${name} is a/an ${age}-year-old ${gender === 'other' ? 'person' : gender} presenting with ${symptom}.` : '';

    const onsetString = onset ? `It started around ${onset}.` : '';

    const progressionString = progression ? `Since it started, ${progressionToString(progression)}.` : '';

    const descriptionString = description ? `Patient describes it as "${description}".` : '';

    const severityString = severity ? `It is a ${severity} on a 10 point scale.` : '';

    const associatedSymptomsString = associated ? `Associated symptoms include "${associated}".` : '';

    const alleviatingString = alleviating ? `The following makes it better - "${alleviating}".` : '';

    const aggravatingString = aggravating ? `The following makes it worse - "${aggravating}".` : '';

    // set the order of sentences in the template
    const template = [
        idString,
        onsetString, 
        progressionString, 
        descriptionString, 
        severityString,
        associatedSymptomsString, 
        alleviatingString, 
        aggravatingString
    ];

    return template.join(" ");
}