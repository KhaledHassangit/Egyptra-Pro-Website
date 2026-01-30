import { toast } from 'sonner';

type NotifyType = 'success' | 'error' | 'info' | 'warning';

export const notify = (message: string, type: NotifyType = 'info') => {
    const styles = {
        success: {
            color: 'var(--primary)',
            borderColor: 'var(--primary)',
        },
        error: {
            color: 'var(--destructive)',
            borderColor: 'var(--destructive)',
        },
        info: {
            color: 'var(--primary)',
            borderColor: 'var(--primary)',
        },
        warning: {
            color: 'var(--warning)',
            borderColor: 'var(--warning)',
        }
    }


    if (type === 'success') {
        toast.success(message, {
            style: {
                color: 'var(--primary)',
                border: '1px solid var(--primary)'
            }
        });
    } else if (type === 'error') {
        toast.error(message, {
            style: {
                color: 'var(--destructive)',
                border: '1px solid var(--destructive)'
            }
        });
    } else if (type === 'warning') {
        toast.warning(message, {
            style: {
                color: 'var(--warning)',
                border: '1px solid var(--warning)'
            }
        });
    } else {
        toast.info(message, {
            style: {
                color: 'var(--primary)',
                border: '1px solid var(--primary)'
            }
        });
    }
};
