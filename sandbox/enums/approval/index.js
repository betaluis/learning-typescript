var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["pending"] = 0] = "pending";
    ApprovalStatus[ApprovalStatus["submitted"] = 1] = "submitted";
    ApprovalStatus[ApprovalStatus["approved"] = 2] = "approved";
    ApprovalStatus[ApprovalStatus["rejected"] = 3] = "rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
var req = {
    id: 1,
    name: 'John',
    status: ApprovalStatus.pending
};
if (req.status === ApprovalStatus.pending) {
    console.log('pending');
}
if (req.status === ApprovalStatus.submitted) {
    console.log('submitted');
}
