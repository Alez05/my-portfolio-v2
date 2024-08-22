import { FlexBox } from '../flexbox';
import { Text } from '../text';
import './input.css';
import { TInput } from './input.type';

const Input = ({
  color = '',
  padding = 0,
  width = '',
  border = '',
  backgroundColor = '',
  borderRadius = '',
  fontSize = 16,
  height = '',
  describedBy,
  field,
  form,
  label,
  id,
  children,
}: TInput) => {
  const stil = {
    color,
    padding,
    width,
    border,
    backgroundColor,
    borderRadius,
    fontSize,
    height,
  } as React.CSSProperties;

  const errorMessage =
    field?.name && form?.errors
      ? (form.errors[field.name as keyof typeof form.errors] as string)
      : undefined;

  return (
    <div>
      <input
        className='input'
        style={stil}
        id={id}
        aria-describedby={describedBy}
        aria-labelledby={label}
        {...field}
      />
      {errorMessage && (
        <FlexBox
          color='var(--color-primary)'
          padding={5}
          fontSize={20}
        >
          <Text color='var(--color-primary)'>{errorMessage}</Text>
          {children}
        </FlexBox>
      )}
    </div>
  );
};

export default Input;
