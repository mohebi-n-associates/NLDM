# Archived Firebase integration

The public website no longer connects this task to Firebase. The task runs locally
in the browser and does not collect names, identifiers, trial records, browser
metadata, or other participant data.

## Required cleanup for the former project

If the former Firebase project still exists, publish rules that deny public access
to its raw records:

```text
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

Then review the `dot_motion_results` collection in the Firebase Console and apply
the course's approved retention or deletion policy. Treat any historical names,
anonymous identifiers, trial-level responses, timestamps, and browser metadata as
participant data; none belongs on the public course website.

Do not restore the former pattern of public reads over raw trial records. A future
population comparison would require an instructor-controlled backend that exposes
only aggregate statistics with suitable minimum cell sizes and no stable
participant identifiers.
