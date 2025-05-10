// ARS = Activity Request Status

export const ARS_NO_STATUS = 0;
export const ARS_APPROVED = 1;
export const ARS_DECLINED = 2;
export const ARS_PENDING = 3;
export const ARS_AVAIBLE = 4;

export const ACTIVITIY_REQUEST_STATUSES = [
  { caption: "Нет статуса", className: "no-status" },
  { caption: "Одобрена", className: "approved" },
  { caption: "Отклонена", className: "declined" },
  { caption: "Подана", className: "pending" },
  { caption: "Подать заявку", className: "avaible" },
];
