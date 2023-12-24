'use client'
import { useAlert } from '@/contexts/AlertContext';
import { XOctagon, AlertTriangle, CheckCircle, Meh } from 'lucide-react';

const Alert = () => {
    const { alert, hideAlert } = useAlert();

    if (!alert.visibility) {
        return null;
    }

    let icon = null;
    let textColorClass = '';

    switch (alert.type) {
        case 'success':
            textColorClass = 'text-green-700';
            icon = <CheckCircle size={20} className='inline mr-2' />
            break;
        case 'warning':
            textColorClass = 'text-yellow-700';
            icon = <AlertTriangle size={20} className='inline mr-2' />
            break;
        case 'error':
            textColorClass = 'text-red-700';
            icon = <XOctagon size={20} className='inline mr-2' />
            break;
        default:
            textColorClass = 'text-gray-700';
            icon = <Meh size={20} className='inline mr-2' />

    }

    const alertClassName = `fixed bottom-0 mb-10 left-1/2 transform -translate-x-1/2 w-auto bg-white border border-gray px-4 py-2 rounded-md shadow-lg z-50 ${textColorClass}`;

    return (
        <div className="alert-container">
            <div className={alertClassName}>
                <div className="flex justify-between items-center text-xs">
                    <div className="mr-4">
                        {icon}
                        {alert.message}
                    </div>
                    <button onClick={hideAlert} className="text-gray-600">
                        &times;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Alert;