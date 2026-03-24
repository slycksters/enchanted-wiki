import clsx from 'clsx';
import styles from './StatInput.module.css';

export const StatInput = ({ allocation, setAllocation }) => {
  // 1. Block invalid keys on Desktop
  const handleKeyDown = (e) => {
    // Safety check if event is missing
    if (!e || !e.key) return;

    const invalidChars = ['e', 'E', '+', '-', '.'];

    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  };

  // 2. Prevent pasting invalid content (e.g. "12.5" or "1e5")
  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData('text');
    // Regex to allow only digits (0-9)
    if (!/^\d+$/.test(pasteData)) {
      e.preventDefault();
    }
  };

  return (
    <section className={clsx(styles.statInputSection, 'row gx-3 gy-2')}>
      <label>Stat Allocation</label>
      <div className={clsx(styles.statInputGroup, 'col col-6')}>
        <label htmlFor={'bladeInput'}>Blade</label>
        <br />
        <input
          id={'bladeInput'}
          inputMode={'numeric'}
          min={'0'}
          name={'blade'}
          onChange={setAllocation}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          placeholder={'Enter stat point'}
          type={'number'}
          value={allocation.blade}
        />
      </div>
      <div className={clsx(styles.statInputGroup, 'col col-6')}>
        <label htmlFor={'meleeInput'}>Melee</label>
        <br />
        <input
          id={'meleeInput'}
          inputMode={'numeric'}
          min={'0'}
          name={'melee'}
          onChange={setAllocation}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          placeholder={'Enter stat point'}
          type={'number'}
          value={allocation.melee}
        />
      </div>
      <div className={clsx(styles.statInputGroup, 'col col-6')}>
        <label htmlFor={'magicInput'}>Magic</label>
        <br />
        <input
          id={'magicInput'}
          inputMode={'numeric'}
          min={'0'}
          name={'magic'}
          onChange={setAllocation}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          placeholder={'Enter stat point'}
          type={'number'}
          value={allocation.magic}
        />
      </div>
      <div className={clsx(styles.statInputGroup, 'col col-6')}>
        <label htmlFor={'defenseInput'}>Defense</label>
        <br />
        <input
          id={'defenseInput'}
          inputMode={'numeric'}
          min={'0'}
          name={'defense'}
          onChange={setAllocation}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          placeholder={'Enter stat point'}
          type={'number'}
          value={allocation.defense}
        />
      </div>
      <div className={clsx(styles.statInputGroup, 'col col-6')}>
        <label htmlFor={'soulStackInput'}>Soul Stack <small>( 1 - 100 )</small></label>
        <br />
        <input
          id={'soulStackInput'}
          inputMode={'numeric'}
          min={'0'}
          name={'soulStack'}
          onChange={setAllocation}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          placeholder={'Enter soul stack'}
          type={'number'}
          value={allocation.soulStack}
        />
      </div>
    </section>
  );
};