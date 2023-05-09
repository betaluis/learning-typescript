enum ApprovalStatus {
    pending,
    submitted,
    approved,
    rejected
}

const req = {
    id: 1,
    name: 'John',
    status: ApprovalStatus.pending
}

if (req.status === ApprovalStatus.pending) {
    console.log('pending')
}

if (req.status === ApprovalStatus.submitted) {
    console.log('submitted')
}
