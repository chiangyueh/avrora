import React from "react";

enum AlertType {
    Success = 'success',
    Default = 'default',
    Danger = 'danger',
    Warning = 'warning'
}

interface BaseAlertProps {
    title: string;
    description?: string;
    type?: AlertType;
    closeable: boolean;
}

